/*
* description 冒泡排序
* @param Array<number> 
* @return Array<number>
*/
export const bubbleSort = (arr) => {
	if(!Array.isArray(arr)) throw '@power Function bubbleSort:argument much be Array'
	if(arr.length <= 1 ) return arr
	let len = arr.length
	for (let i = 0; i < len; i++) {
		let flag = false
		for(let j = 0; j < len-i-1; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				flag = true
			}
		}
		if(!flag) break
	}
	return arr
	
}
/*
* description 插入排序
* @param Array<number> 
* @return Array<number>
*/
export const insertSort = (arr) => {
	if(!Array.isArray(arr)) throw '@power Function insertSort:argument much be Array'
	if(arr.length <= 1 ) return arr
	const len = arr.length
	for(let i = 1; i< len; i++) {
		let insertValue = arr [i]
		let j = [i-1]
		// 从后面开始比较
		for(; j>=0; j--) {
			if(arr[j] > insertValue) {
				arr[j + 1] = arr [j]
			}else { 
				break 
			}
		}
		// 插入数据
		arr [j+1] = insertValue
	}
}


