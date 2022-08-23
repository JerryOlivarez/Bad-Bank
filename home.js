function Home(){
    return (
      <center><Card
        txtcolor="white"
        bgcolor="danger"
        header="Bad Bank"
        title="Welcome to the bank"
        text="Thank you for choosing Bad Bank. We focus on making sure all of your banking needs are safe and secure. Feel
        free to create an account to get started with all of your banking needs."
        body={(<img src="bank.jpg" className="img-fluid" alt="Responsive image"/>)}
      /></center>    
    );  
  }