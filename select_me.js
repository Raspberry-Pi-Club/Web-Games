var qBase = [
	{"question":"Which one is used in soccer?","answer":1	},
	{"question":"Color of Trust ?","answer":2	},
	{"question":"Propellent is used in","answer":1		},
	{"question":"Select the clone of Android ?","answer":4},
	{"question":"Which one is the product of Apple ?","answer":1		},
	{"question":"Dwayne plays for ?","answer":4			},
	{"question":"Among them who is richest ?","answer":1		},
	{"question":"In which you can't send messages ?","answer":3	},
	{"question":"Which one is owned by Google ?","answer":3	}
];


// First Question

addEntry(0,qBase[0].question,qBase[0].answer)

function nextQuestion(qno){
	qno = Number(qno) + 1;
	addEntry(qno,qBase[qno].question,qBase[qno].answer)
}

function addEntry(qno,question,answer){
	$('#question').html(question);
	$('#choice1').attr('src','img/0'+(qno+1)+'_choice1.jpg');
	$('#choice2').attr('src','img/0'+(qno+1)+'_choice2.jpg');
	$('#choice3').attr('src','img/0'+(qno+1)+'_choice3.jpg');
	$('#choice4').attr('src','img/0'+(qno+1)+'_choice4.jpg');
	$('.answer').attr('question',qno);
}

$('.answer').click(function(){
	var qno = $(this).attr('question');
	var answerLoc = $(this).attr('location');
	if(answerLoc==qBase[qno].answer-1){
		swal("Good job!", "You are right !", "success");
		nextQuestion(qno);	
	}
	else{
		swal("Sorry Try Again!", "", "error");
	}
});
