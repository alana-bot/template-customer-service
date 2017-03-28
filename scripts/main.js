newScript()
  .dialog((sessions, response) => {
    response.sendText('How can I help you?');
  })
  .expect
    .intent('business', 'exchange', (session, response) =>{
      response.sendText('I can start the exchange process now');
    })
    .intent('business', 'exchange', (session, response) =>{
      response.sendText('I can start the exchange process now');
    })
    .catch((session, response) => {
      response.sendText('I don\'t understand, can you try again?');
      console.log(session.intent);
    })
    
