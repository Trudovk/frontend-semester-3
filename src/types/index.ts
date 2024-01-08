export type ServerType = {
  key: string;
  processor: string;
  disk: string;
  ram: string;
  rentPerMonth: string;
};

export type PaginationType = {
  current: number;
  pageSize: number;
  totalPages: number;
};

export type ColumnsType = {
  title: string;
  dataIndex: string;
  key: string;
};
