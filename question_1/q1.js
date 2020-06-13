	var record=["Enter uid1234 Iwan", "Enter uid4567 Elisabet", "Leave uid1234", "Change uid1234 Jhon", "Enter uid1234 Jhon"];
	
	function solution(record){
		var new_record =[]; //array penampung
		var index_new_record=0; //index array penampung
		var answer=[];
		var index_answer=0;
		var id_dan_nama=[];
		
		var output_html=[];
		var output_record_to_html=[];
			
		for (var i = 0; i < record.length; i++){
			//split dulu
			var new_string_temp=record[i].split(" ");
			
			if(new_string_temp[0] == "Change"){
				//jika ada yang rubah nama
				var id=new_string_temp[1];
				var nama_yang_baru=new_string_temp[2];
				for(var ii = 0; ii < new_record.length; ii++){
					var split_new_record=new_record[ii].split(" ");
					var split_answer=answer[ii].split(" ");
					if(split_new_record[0] == id){	
						//upatde array new_record
						var new_string=split_new_record[0]+" "+nama_yang_baru;
						new_record[ii]=new_string;
												
						//update array answer dalam hal ini nickname nya
						new_string=nama_yang_baru+" "+split_answer[1]+" "+split_answer[2];
					
						//simpan dalam array hasil
						answer[ii]=new_string;
						//index_answer++;
						
						//echo or return
						////return answer;
						document.getElementById("hasil").innerHTML=answer;
						
						//additional
						for(var ir=0; ir < record.length; ir++){
							output_record_to_html[ir]="''"+record[ir]+"''";
						}
						document.getElementById("record").innerHTML="["+output_record_to_html+"]";
						
					}	
				}
			}else if(new_string_temp[0] == "Enter"){
			
				var new_string=new_string_temp[1]+" "+new_string_temp[2];
				new_record[index_new_record]=new_string;
				index_new_record++;
				
				//safe to array assosiatif id_dan_nama
				var ids=new_string_temp[1];
				id_dan_nama[ids]=new_string_temp[2];
				
				//jika Enter maka "[Nama] came in."
				new_string=new_string_temp[2]+" came in.";
			
				//simpan dalam array hasil
				answer[index_answer]=new_string;
				index_answer++;
				
			}else{
				var ids=new_string_temp[1];
				var new_string=new_string_temp[1]+" "+id_dan_nama[ids];
				new_record[index_new_record]=new_string;
				index_new_record++;
				
				//jika Enter maka "[Nama] came in."
				new_string=id_dan_nama[ids]+" has left.";
			
				//simpan dalam array hasil
				answer[index_answer]=new_string;
				index_answer++;
				
			}		
		}

		//echo or return
		////return answer;
	
		////print answer;
		for(var ip = 0; ip < answer.length; ip++){
			output_html[ip]="''"+answer[ip]+"''";
			document.getElementById("hasil").innerHTML="["+output_html+"]";
		
		}
		//additional
		for(var ir=0; ir < record.length; ir++){
			output_record_to_html[ir]="''"+record[ir]+"''";
		}
		document.getElementById("record").innerHTML="["+output_record_to_html+"]";
		
	}
	solution(record);