	var relation=[["8801","Iwan","30-10-1990","57"],
					["8802","Anna","30-10-1991","57"],
					["8803","Sinta","30-10-1992","58"],
					["8804","Asep","30-10-1992","59"],
					["8805","Indra","30-10-1990","58"],
					["8806","Anna","30-10-1990","57"]
					];
	 
	function solution(relation){
		//var string="";
		var temp=[];
		var index_temp=0;
		var temp_satu=[];
		var jumlah_string_perbaris=0;
		for(var i = 0; i <= relation.length; i++){
			
			//get array;
			if(i==0){
				for(var ii = 0; ii < relation[0].length; ii++){
				//string=string+relation;
					temp[ii]=parseInt(ii)+1;
				}
			}
				
			var to_string=toString(relation[i]);
			var split_string=to_string.split(",");
			var nim=split_string[i_temp];
			var duplicate=false;
			
			for(var ii = 0; ii <= relation.length; ii++){
				var ii_plus=ii+1;
				var to_string2=toString(relation[ii_plus]);
				var split_string2=to_string2.split(",");
				var nim2=split_string2[i_temp];
				
				if(nim==nim2){
					//has duplicated at index of ids
					duplicate=true;
				}
			}
			if(!duplicate){
				temp[index_temp]=temp.splice(i_temp, 1);
			}
			
			
		};
	
	
		for(var ii = 0; ii < jumlah_string_perbaris; i++){
			temp[ii]=parseInt(ii)+1;
		}
		document.getElementById("hasil").innerHTML="["+temp+"]";
				
		
	}
	solution(relation);