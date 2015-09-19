var qBase = [
	{"question":"Who is Narendra modi ?","answer":3,"choices":
				["Crime Minister","IT Minister","Educational Officer","Prime Minister"]
	},
	{"question":"which is the first indian satellite ?","answer":1,"choices":
				["bhaskara","aryabhatta","columbia","rohini"]
	},
	{"question":"which is the 4 th planet nearest to mercury?","answer":3,"choices":
				["venus","neptune","earth","jupiter"]
	},
	{"question":"Which is the largest river in India?","answer":2,"choices":
				["yamuna","kaveri","ganga","bramhaputra"]
	},
	{"question":"which state in India has a desert in it?","answer":2,"choices":
				["madhya pradesh","uttar pradesh","rajasthan","Punjab"]
	},
	{"question":"Punjab is famous for ?","answer":1,"choices":
				["Silk textile","Woolen textile","Cotton textile","Nylon textile"]
	},
	{"question":"Which city is famous for Cotton Industry in TamilNadu","answer":2,"choices":
				["Madurai"," Chennai","Coimbatore","Trichy"]
	},
	{"question":"which is the hottest planet in the solar system?","answer":1,"choices":
				[" Venus","mercury","earth","mars"]
	},
	{"question":"Which gas is used for the preparation of Soda water","answer":2,"choices":
				["Ammonia","Hydrogen","Carbon Dioxide","Oxygen"]
	},
	{"question":"The World Largest desert is?","answer":0,"choices":
				["Sahara","Kalahari","Sonoran","Thar"]
	},
	{"question":"where is the Gate way of India?","answer":3,"choices":
				["Kolkata","New Delhi","Chennai","Mumbai"]
	},
	{"question":"The Rajya Sabha can have a maximum strength of?","answer":0,"choices":
				["250","260","270","210"]
	},
	{"question":"Boat Race is a popular sport in?","answer":0,"choices":
				[" Kerala","Tamilnadu","Andhrapradesh","Karataka"]
	},
	{"question":"Where is Mount Everest is located? ","answer":1,"choices":
				["Tibet","Nepal","China","India"]
	},
	{"question":"Which of the following is not a classical dance?","answer":0,"choices":
				["Bharatnatyam","Garba"," Kathak","Odissi"]
	}

];

jQuery.each(qBase, function(i,item) {
  console.log(qBase[i].question);
});

// First Question

addEntry(0,qBase[0].question,qBase[0].choices,qBase[0].answer)

function nextQuestion(qno){
	qno = Number(qno) + 1;
	addEntry(qno,qBase[qno].question,qBase[qno].choices,qBase[qno].answer)
}

function addEntry(qno,question,choices,answer){
	$('#question').html(question);
	$('#choice1').html(choices[0]);
	$('#choice2').html(choices[1]);
	$('#choice3').html(choices[2]);
	$('#choice4').html(choices[3]);
	$('.answer').attr('question',qno);
}

$('.answer').click(function(){
	var qno = $(this).attr('question');
	var answerLoc = $(this).attr('location');
	if(answerLoc==qBase[qno].answer){
		swal("Good job!", "You are right !", "success");
		nextQuestion(qno);	
	}
	else{
		swal("Sorry Try Again!", "", "error");
	}
});
