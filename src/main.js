var $count = 0;

(function($){
        

    $.getJSON("quiz.json", function(json){
        
        var score = 0;

        $('.score').text('Score: ' + score);

        loadNewQuestion();

        $('section').on('click','button', function(event){

            var target = $( event.target);

            if( target.children().text() == 'true'){

                console.log('correct!');
                target.css('background-color', 'green');
                score++;
                $('.score').text(score);

                setTimeout( function(){ 
                    $('.quiz-one .question').text('');
                    $('.quiz-one .answers').text('');
                    loadNewQuestion();
                }  , 2000 );

            } else {
                console.log('wrong!');
                target.css('background-color', 'red');
                return;
            }
        })

        function loadNewQuestion(){
            
            if(json.quizzes[0].questions[window.$count] != undefined ){

                $('.quiz-one .question').text(json.quizzes[0].questions[window.$count].question);

                for(i = 0; i < json.quizzes[0].questions[window.$count].answers.length ; i++){ 

                    var truthiness = false;
                    truthiness = json.quizzes[0].questions[window.$count].answers[i].value;
                    $('.quiz-one .answers').append('<button>' + json.quizzes[0].questions[window.$count]
                                            .answers[i].content + '<p>' + truthiness + '</p>' + '</button>');

                }

                window.$count++;
            } else {
                window.location.href = "completion.html"
                return;
            }
        }
        
    });
})(jQuery);