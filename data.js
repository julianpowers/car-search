const CAR_DATA = {
  updated: "September 4, 2026 · 5:00 AM ET · dealer-verified refresh",
  summary: [
    "Today's refresh revalidated the board against dealer-owned inventory pages and removed the 2018 Honda CR-V EX that no longer appears in Don Moore's current inventory. Marketplace-only candidates remain excluded until a live selling-dealer VDP can be verified.",
    "The 2018 Ford Fusion Hybrid S remains the clear efficiency/value leader: Don Moore's live VDP still shows 44,463 miles, 42 MPG combined, and a $14,498 Moore Value Price including its $498 processing fee.",
    "The 2018 Honda CR-V LX remains a dealer-direct crossover option, but its 136,647 miles keep it well behind the Fusion. The 2020 Toyota Corolla Hatchback SE remains a useful Toyota fallback at $16,985, though its 115,193 miles are also above the preferred range.",
    "The prior Uebelhor Hyundai Elantra listing could not be freshly revalidated in this pass, so it has been removed rather than leaving a potentially stale candidate on the board.",
    "Current dealer inventories contain newer Corolla, Civic, Camry and crossover candidates, but they are not being promoted onto the board until both price and mileage can be verified under the $20,000 ceiling from a live dealer page."
  ],
  cars: [
    {rank:1,year:2018,vehicle:"Ford Fusion Hybrid S",price:14498,miles:44463,type:"Sedan",fuel:"Hybrid",drive:"FWD",dealer:"Don Moore on Frederica",area:"Owensboro, KY",vin:"3FA6P0UUXJR282061",assessment:"Best verified value today. Local, low mileage for age, and roughly 42 MPG combined. Dealer page remains live at $14,498 including the $498 processing fee.",url:"https://www.donmoorehonda.com/used-Owensboro-2018-Ford-Fusion%2BHybrid-S-3FA6P0UUXJR282061"},
    {rank:2,year:2020,vehicle:"Toyota Corolla Hatchback SE",price:16985,miles:115193,type:"Hatchback",fuel:"Gas",drive:"FWD",dealer:"Uebelhor & Sons Chevrolet Jasper",area:"Jasper, IN",vin:"JTND4RBE8L3084960",assessment:"Toyota reliability and a reasonable price, but 115k miles is well above the target. Keep as a fallback while lower-mileage dealer-direct Toyotas are sought.",url:"https://www.uebelhor.com/used/Toyota/2020-Toyota-Corolla-Hatchback-d3b3118bac18293816166144b1f52160.htm"},
    {rank:3,year:2018,vehicle:"Honda CR-V LX",price:16288,miles:136647,type:"Small crossover",fuel:"Gas",drive:"FWD",dealer:"Don Moore on Frederica",area:"Owensboro, KY",vin:"2HKRW5H36JH414504",assessment:"Dealer-direct crossover option, but 136k+ miles is substantially above the preferred range. Consider only if crossover utility outweighs mileage concerns.",url:"https://www.donmoorechevy.com/used-Owensboro-2018-Honda-CR%2BV-LX-2HKRW5H36JH414504"}
  ]
};