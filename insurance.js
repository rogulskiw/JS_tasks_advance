
    const insuranceType = 'zdrowotne';
    const age = 30; 
    const health = true; 
    
    function calculateInsurancePremium(insuranceType, age, health){
        let premium = 0;
        if(insuranceType === 'zdrowotne'){
            premium = 100;
        } else if(insuranceType === "majatkowe"){
            premium = 200; 
        } else if(insuranceType === "na zycie"){
            premium = 300; 
        }
        
        if(age < 18) {
            premium *= 0.5;
        } else if( age > 65 ) {
            premium *= 0.2;
        }
        
        if(health === false){
            premium *= 0.5;
        }
        
        return premium;
    }
     const premium = calculateInsurancePremium(insuranceType, age, health);
     console.log(`Skladka ubezpieczeniowa: ${premium} PLN`);