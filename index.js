function Spa() {
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'Jerry',email:'ajolivarez73@gmail.com',password:'',balance:100}]}}>
          <div className="container" style={{padding: "90px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );