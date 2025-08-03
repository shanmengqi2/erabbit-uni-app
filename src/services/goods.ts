import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'
/**
 * 获取商品详情
 * @param id 商品id
 * @returns 商品详情
 */
export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
