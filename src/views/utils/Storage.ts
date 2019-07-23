
import * as Store from 'store'
export interface IStorage {
    key: string
    value: any
}
const setStorage = (values: IStorage) => {
    Store.set(values.key, values.value);
}
const getStorage = (values: IStorage) => {
    Store.get(values.key);
}
const removeStorage = (values: IStorage) => {
    Store.remove(values.key);
}
const removeAllStorage = () => {
    Store.clearAll();
}
const StorageUtils:object = {
    set: setStorage,
    get: getStorage,
    remove: removeStorage,
    removeAll: removeAllStorage
}
export default StorageUtils