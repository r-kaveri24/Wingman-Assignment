
import React from "react";
export const weeklyData = [
    { day: 'Mon', incoming: 33, answered: 28, experts: 7 },
    { day: 'Tue', incoming: 32, answered: 27, experts: 7 },
    { day: 'Wed', incoming: 38, answered: 32, experts: 9 },
    { day: 'Thu', incoming: 45, answered: 40, experts: 18 },
    { day: 'Fri', incoming: 43, answered: 34, experts: 8 },
    { day: 'Sat', incoming: 48, answered: 35, experts: 10 },
    { day: 'Sun', incoming: 52, answered: 37, experts: 10 },
];
export const comparisonData = [
    { period: 'This week', consultations: 20, orders: 15 },
    { period: 'Last week', consultations: 15, orders: 10 },
];
export const data = [
    { "id": 1, "product": "Product Name 1", "date": "24 Apr ‘2024", "timeSpent": "2h 5m", "orderValue": "$120.21", "commission": "$55" },
    { "id": 2, "product": "Product Name 2", "date": "21 Oct ‘2024", "timeSpent": "2h 5m", "orderValue": "$220.21", "commission": "$95" },
    { "id": 3, "product": "Product Name 3", "date": "15 Jan ‘2024", "timeSpent": "2h 5m", "orderValue": "$180.21", "commission": "$30" },
    { "id": 4, "product": "Product Name 4", "date": "10 Dec ‘2024", "timeSpent": "2h 5m", "orderValue": "$50.00", "commission": "$99" },
    { "id": 5, "product": "Product Name 5", "date": "4 July ‘2024", "timeSpent": "2h 5m", "orderValue": "$120.21", "commission": "$80" },
    { "id": 6, "product": "Product Name 6", "date": "24 Apr ‘2024", "timeSpent": "2h 5m", "orderValue": "$110.21", "commission": "$55" },
    { "id": 7, "product": "Product Name 7", "date": "1 Aug ‘2024", "timeSpent": "3h 15m", "orderValue": "$130.50", "commission": "$60" },
    { "id": 8, "product": "Product Name 8", "date": "12 Sep ‘2024", "timeSpent": "1h 45m", "orderValue": "$90.00", "commission": "$40" }
]

export const cardsData = [
    {
        title: "Consultations",
        value: "25",
        icon: <img src="Vector(10).png" alt="Consultations" style={{ width: '12px', height: '12px' }} />,
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendUp.png" alt="" className="w-6 h-6" /><span className="text-[#15B79F]">15%</span> increase</p>
    },
    {
        title: "ORDERS PLACED",
        value: "500",
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendDown.png" alt="" className="w-6 h-6" /><span className="text-[#F04438]">15%</span> increase</p>,
        icon: <img src="Tag.png" alt="Orders Placed" style={{ width: '12px', height: '12px' }} />,
    },
    {
        title: "CONVERSION",
        value: "2.5%",
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendDown.png" alt="" className="w-6 h-6" /><span className="text-[#F04438]">15%</span> increase</p>,
        icon: <img src="CheckFat.png" alt="Conversion" style={{ width: '12px', height: '12px' }} />,
    },
    {
        title: "TOTAL SALES VALUE",
        value: "$10,000",
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendUp.png" alt="" className="w-6 h-6" /><span className="text-[#15B79F]">15%</span> increase</p>,
        icon: <img src="Coins.png" alt="Total Sales Value" style={{ width: '12px', height: '12px' }} />,
    },
    {
        title: "AVG ORDER VALUE",
        value: "$200",
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendUp.png" alt="" className="w-6 h-6" /><span className="text-[#15B79F]">15%</span> increase</p>,
        icon: <img src="Coin.png" alt="Avg Order Value" style={{ width: '12px', height: '12px' }} />,
    },
    {
        title: "COMMISSION PAID",
        value: "$100,000",
        discription: <p className="flex gap-2 text-sm items-center"><img src="TrendUp.png" alt="" className="w-6 h-6" /><span className="text-[#15B79F]">15%</span> increase</p>,
        icon: <img src="PiggyBank.png" alt="Commission Paid" style={{ width: '12px', height: '12px' }} />,
    },
];