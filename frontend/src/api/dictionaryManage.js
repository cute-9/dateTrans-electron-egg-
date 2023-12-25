import request from "@/utils/request";
//获取数据统计
export function getAllFields(params) {
  return request({
    url: `fieldName/getAllFields`,
    method: "get",
    params,
  });
}