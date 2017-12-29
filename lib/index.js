module.exports = {

	asc: function(sort_array){

			//let sort_array = [4,1,3,2];
			let new_sort_array;

			//define swap array function variable
			function swapArrayElements(arr, indexA, indexB) {
			  var temp = arr[indexA];
			  arr[indexA] = arr[indexB];
			  arr[indexB] = temp;

			  return arr;
			};

			function insertSort(sort_array){

			  let array_num = sort_array.length;

			  //console.log("array_num: ", array_num);//count the number of the array

			  for(let i=0; i<array_num; i++){// first loop: loop all of the index of the array
			    let before_index = i-1;

			    //console.log("looped1 i[", i, "]");

			    for(let j=before_index; j>=0; j--){ //secord loop: loop until the before index is empty

			      //console.log("looped2 j[", j, "]");
			      let before_index_loop2 = j+1;

			    	//compare before index and current index of the array
			    	//if current index is less than before, this will swap 
			    	if(sort_array[j] > sort_array[before_index_loop2] ){

			        //console.log("compare:", sort_array[j], sort_array[before_index_loop2]);
			        new_sort_array = swapArrayElements( sort_array, sort_array.indexOf(sort_array[j]), sort_array.indexOf(sort_array[before_index_loop2]) );
			        //console.log(new_sort_array);
			    	}//end if
			      else{
			        j=0;
			      }

			    }//end second loop

			  }//end first loop

			  return new_sort_array;
			}//end function

			let sorted = insertSort(sort_array);

			return sorted;
			//console.log(sorted);

	}//end functopm
}