import { Octokit } from '@octokit/core'

const PAGE_SIZE = 50;

const octokit = new Octokit();
const init = {
    keyword: undefined,
    items: [],
    page: 1,
    finished: false
};
const current = { ...init };

const params = (q, clear) => {
    const baseParams = { q, 'per_page': PAGE_SIZE };
    if (current.keyword !== q || clear) {
        Object.assign(current, { ...init, keyword: q });
        return baseParams;
    } else if (!current.finished) {
        return { ...baseParams, page: ++current.page };
    }
};

export const searchRepoBy = async (q, clear) => {
    const parameters = params(q, clear);
    if (parameters) {
        const res = await octokit.request('GET /search/repositories', parameters);
        Object.assign(current, {
            items: parameters.page > 1
                ? [...current.items, ...res.data.items]
                : res.data.items,
            finished: res.data.incomplete_results
        });
        return current.items;
    }
};