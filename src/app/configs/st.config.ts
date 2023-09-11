import { STData, STReq, STRes } from '@delon/abc/st/st.interfaces';

const req: STReq = {
  reName: { pi: 'page', ps: 'size' },
  headers: {},
  method: 'POST',
  allInBody: true,
  params: {},
  body: {}
};
const res = {
  reName: { list: 'data.rows', total: 'data.total' }
};

export const ST = {
  req,
  res
};