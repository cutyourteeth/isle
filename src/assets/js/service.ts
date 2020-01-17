import axios, { AxiosResponse } from 'axios'

export interface RecordDto {
    [propsName: string]: { secondHandedAmount: string }
}

export interface EstateDataDto {
    id: number
    record: RecordDto
    createAt?: string
    updateAt?: string
    deleteAt?: string
}

/**
 * 用于调用服务端接口
 * @export
 */
export default class ServerApi {
    public static serverUrl = 'http://localhost:3141'

    public static async rawGetRequest<T = AxiosResponse<EstateDataDto[] | any>>(api: string) {
        const result = await axios.get<T>(`${this.serverUrl}/${api}`)
        return result
    }
}
