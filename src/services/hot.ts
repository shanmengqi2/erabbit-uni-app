import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
/**
 * 获取热门推荐
 * @param url 请求地址
 * @param data 请求参数
 * @returns 响应数据
 */
export const getHotRecommendAPI = (url: string, data?: PageParams & { subtype?: string }) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
