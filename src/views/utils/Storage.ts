
import * as Store from 'store'
export interface IStorage {
    key: string
    value: any
}
const setStorage = (values: IStorage) => {
    Store.set(values.key, values.value);
}
const getStorage = (value: string) => {
    Store.get(value);
}
const removeStorage = (value: string) => {
    Store.remove(value);
}
const removeAllStorage = () => {
    Store.clearAll();
}
const StorageUtils: object = {
    set: setStorage,
    get: getStorage,
    remove: removeStorage,
    removeAll: removeAllStorage
}
export default StorageUtils