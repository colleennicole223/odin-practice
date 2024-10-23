public static int monthlyCharge(String month, Subscription subscription, User[] users) {
    int charge = 0;
    double portionMonth = 1; 
    String[] dateInfo = month.split("-");
    LocalDate chargeMonth = LocalDate.of(Integer.parseInt(dateInfo[0]), Integer.parseInt(dateInfo[1]),1);
    
    for (User user : users) {
        if (user.deactivatedOn == null) { 
            //The user is still active
            if (user.activatedOn.compareTo(chargeMonth) < 0){
                //The user started their subscription before this month
                //Return the full monthly charge
                charge += subscription.monthlyPriceInCents * portionMonth;
            }else{
                //The user started their subscription sometime this month  
                portionMonth = portionMonthSubscribed(activatedOn,lastDayOfMonth(chargeMonth));              
                charge += subscription.monthlyPriceInCents * portionMonth;
                // Reset the portionMonth to 1
                portionMonth = 1; 
            }
        }else{
            //The user is no longer active
            if(user.deactivatedOn.compareTo(chargeMonth) > 0){
                //The user ended their subscription during this month
                portionMonth = portionMonthSubscribed(firstDayOfMonth(chargeMonth),deactivatedOn);
                charge += subscription.monthlyPriceInCents * portionMonth;
                // Reset the portionMonth to 1
                portionMonth = 1; 
            }
        }  
    }
    return charge;
}

//update the portionMonth variable to match the portion of the month the user was active 
// portionMonth = End Date - Start Date / amount of days in the month 
public static double portionMonthSubscribed(LocalDate start, LocalDate end) {
    // if they start and end on the same day, the math still works 
    return ((double)(getDayOfMonth(end) - getDayOfMonth(start) + 1))/ (double)(getDayOfMonth(lastDayOfMonth(chargeMonth)));
}