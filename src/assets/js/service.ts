import axios, { AxiosResponse } from 'axios';

export interface RecordData {
    [propName: string]: { timestamp: string; value: string };
}

interface BaseDataDto {
    id: number;
    record: RecordData;
    createAt?: string;
    updateAt?: string;
    deleteAt?: string;
}
export interface EstateDataDto extends BaseDataDto {}
export interface PriceDataDto extends BaseDataDto {}

/**
 * 用于调用服务端接口
 * @export
 */
export default class ServerApi {
    public static serverUrl = 'http://caperal.cn:3141';
    // public static serverUrl = 'http://localhost:3141'

    public static async getListData<T = AxiosResponse<BaseDataDto[] | any>>(api: string, name?: string) {
        let destination = name ? `${api}/${name}` : `${api}`;
        const result = await axios.get<T>(`${this.serverUrl}/${destination}`);
        return result;
    }
}
