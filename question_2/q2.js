	var N=50;
	var users=[5,10,17,20,25,35,40,43,5,20,20,17,20,25,20];
	 
	function solution(N, users){
		var temp=[];
		var temp_sort=[];
		var index_temp_sort=0;
		var cursor=0;
		
			for(var i = 0; i <= N; i++){
				var jumlah_kemunculan=0;
				for(var ii = 0; ii < users.length; ii++){
					if(i == users[ii]){
						jumlah_kemunculan++;						
						temp[i]=jumlah_kemunculan;
						//alert(jumlah_kemunculan);
						/*
						var prev_index=parseInt(i) - 1;
						if((prev_index >= 0)&&(temp[i] < temp[prev_index])){
							
						}
						temp_sort[i]*/
						
					}else{
						//alert(jumlah_kemunculan);
						
						temp[i]=jumlah_kemunculan;
						
					}
				}
				var prev_index=parseInt(i) - 1;
				//alert(prev_index);
				if((index_temp_sort > 0 )&&(jumlah_kemunculan > temp[prev_index]))
				{
					//array unshift
					var x=temp_sort[0];
					if(jumlah_kemunculan > temp[x]){
						temp_sort.unshift(i);
						index_temp_sort++;
						cursor++;
					}else{
						temp_sort.splice(cursor, 0, i);
						//temp_sort.unshift(i);
						index_temp_sort++;
						cursor++;
					}
					
					////return answer;
					document.getElementById("hasil").innerHTML="["+temp_sort+"]";
						
				}else{
					//array push
					temp_sort.push(i);
					index_temp_sort++;
					
					////return answer;
					document.getElementById("hasil").innerHTML="["+temp_sort+"]";
						
				}
				document.getElementById("jumlah").innerHTML=N;
				document.getElementById("record").innerHTML="["+users+"]";
					
			}
		//additional
		
	}
	solution(N, users);