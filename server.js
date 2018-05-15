var express = require ('express');
    app = express();
    
    app.use(express.static(__dirname ));
    
    app.get('/events/:eveId' ,function(req, res){
       var eventId = parseInt(req.params.eveId);
        var data = {};
    
        for(var i=0, len = events.length; i<len; i++){
       
            if(events[i].eveId === eventId){
                data = events[i];    
                break;
            }
        }
    
        res.json(data);
    });    
    
    app.get('/events', function(req,res){
        res.json(events);
    })
    app.listen(8989);
    console.log('Listening to port 8989');
    
    
    var events = [
        {   eveId: 1,
            Title: 'Primary School',
            Date: '12-04-2010',
            Place: 'Amritsar, India',
            Level: 'A',
            Detail:[
                {eveId: 1,
                Organization:'Little Flower High School',
                Subjects:'English, Maths, Science, Social Studies, Computers'}
            ]
        },
        { eveId: 2,
            Title: 'High School',
            Date: '29-04-2012',
            Place: 'Amritsar, India',
            Level: 'B+',
            Detail:[
                {eveId: 2,
                Organization:'Khalsa College Public School',
                Subjects:'English, Maths, Science'}
            ]
        },
        { eveId: 3,
            Title: 'Undergraduation',
            Date: '30-04-2016',
            Place: 'Sathiala, India',
            Level: 'B+',
            Detail:[
                {eveId: 3,
                Organization:'Guru Nanak Dev University',
                Subjects:'Electronics and Communication Engineering'}
            ]
        },
        { eveId: 4,
            Title: 'Graduation',
            Date: '03-05-2018',
            Place: 'Windsor, Canada',
            Level: 'A',
            Detail:[
                {eveId: 4,
                Organization:'University of Windsor',
                Subjects:'Computers and Electrical Engineering'}
            ]
        }];