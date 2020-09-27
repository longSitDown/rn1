import { StyleSheet } from "react-native"
const formatData = {}
const formatUseData = {}

const formatStyleData = (styles, name) => {
    let a = styles
    Object.entries(styles).forEach(([index,val]) => {
        if (val instanceof Object) {
            formatStyleData(val, name + '+' + index)
            delete a[index]
        }
    })
    formatData[name] = a
    return formatData
}

const formatStyleUseData = (data) => {
    Object.entries(data).forEach(([key,val]) => {
        let arr = key.split('+')
        fuzhi({data:formatUseData,arr,val})
    })
    return formatUseData
}

const fuzhi = ({arr,data,val}) => {
    if(arr.length>1){
        let key = arr.shift()
        if(!data[key]){
            data[key]={}
        }
        return fuzhi({data:data[key],arr,val})
    }
    data[arr[0]]=val
}

const CssTree = (styleData, name) => {
    let data = formatStyleData(styleData,name)
    let styles = StyleSheet.create(data)
    return formatStyleUseData(styles)
}

export default CssTree