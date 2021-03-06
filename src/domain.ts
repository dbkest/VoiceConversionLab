// searched papers, which is used in several purpose
export type SearchedPaper = {
  id: string;
  title: string;
  summary: string;
};
export type ArXivSearchResults = SearchedPaper[];

// points: this is merely arXiv search result storage (status is for refined search)
export type candidate = "candidate";
export type resolved = "confirmed" | "excluded";
export type Identity = {
  repository: "arXiv";
  article: string;
  version: string;
};
export type ArXivRecord = {
  id: Identity;
  status: candidate | resolved;
};
export type ArXivStorage = ArXivRecord[];
