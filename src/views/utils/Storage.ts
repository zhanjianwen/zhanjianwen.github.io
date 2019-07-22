
import * as Store from 'store'
export interface StorageGet {
    key: string
    value:any
}
const setStorage = (values: StorageGet) => {
    Store.set(values.key, values.value);
}
const getStorage = (values: StorageGet) => {
    Store.get(values.key);
}
const removeStorage = (values: StorageGet) => {
    Store.remove(values.key);
}
const removeAllStorage = () => {
    Store.clearAll();
}
const StorageUtils: any = {
    set:setStorage,
    get: getStorage,
    remove: removeStorage,
    removeAll: removeAllStorage
}
export default StorageUtils