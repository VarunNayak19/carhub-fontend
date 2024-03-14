import { CarProps, FilterProps } from "../types"

export const calculateCarRent = (city_mpg: number, year: number, drive: string, make: string) => {
    const basePricePerDay = 3499; // Base rental price per day in dollars
    const mileageFactor = 1.5; // Additional rate per mile driven
    const ageFactor = 0.25; // Additional rate per year of vehicle age
    const drivePay = drive === "awd" ? 3000 : 2000
    const carBrandPricesINR = [
        {
            brand: "Acura",
            price: 4380
        },
        {
            brand: "Alfa Romeo",
            price: 5110
        },
        {
            brand: "Aston Martin",
            price: 21900
        },
        {
            brand: "Audi",
            price: 5840
        },
        {
            brand: "Bentley",
            price: 29200
        },
        {
            brand: "BMW",
            price: 6570
        },
        {
            brand: "Buick",
            price: 3650
        },
        {
            brand: "Cadillac",
            price: 5110
        },
        {
            brand: "Chevrolet",
            price: 3650
        },
        {
            brand: "Chrysler",
            price: 4015
        },
        {
            brand: "Citroen",
            price: 4380
        },
        {
            brand: "Dodge",
            price: 4015
        },
        {
            brand: "Ferrari",
            price: 25550
        },
        {
            brand: "Fiat",
            price: 3285
        },
        {
            brand: "Ford",
            price: 4380
        },
        {
            brand: "GMC",
            price: 4380
        },
        {
            brand: "Genesis",
            price: 5200
        },
        {
            brand: "Honda",
            price: 4015
        },
        {
            brand: "Hyundai",
            price: 4015
        },
        {
            brand: "Infiniti",
            price: 5110
        },
        {
            brand: "Jaguar",
            price: 6205
        },
        {
            brand: "Jeep",
            price: 4380
        },
        {
            brand: "Kia",
            price: 4015
        },
        {
            brand: "Lamborghini",
            price: 29200
        },
        {
            brand: "Land Rover",
            price: 6205
        },
        {
            brand: "Lexus",
            price: 5475
        },
        {
            brand: "Lincoln",
            price: 5110
        },
        {
            brand: "Maserati",
            price: 10950
        },
        {
            brand: "Mazda",
            price: 4015
        },
        {
            brand: "McLaren",
            price: 21900
        },
        {
            brand: "Mercedes-Benz",
            price: 6570
        },
        {
            brand: "MINI",
            price: 4745
        },
        {
            brand: "Mitsubishi",
            price: 3650
        },
        {
            brand: "Nissan",
            price: 4015
        },
        {
            brand: "Porsche",
            price: 10950
        },
        {
            brand: "Ram",
            price: 4380
        },
        {
            brand: "Rolls-Royce",
            price: 36500
        },
        {
            brand: "Subaru",
            price: 4015
        },
        {
            brand: "Tesla",
            price: 7300
        },
        {
            brand: "Toyota",
            price: 4380
        },
        {
            brand: "Volkswagen",
            price: 4380
        },
        {
            brand: "Volvo",
            price: 5110
        }
    ];

    let brandPay: number;

    carBrandPricesINR.map((item: any) => (
        item.brand.toLowerCase().includes(make.toLowerCase()) ? brandPay = item.price : 3000
    ))

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = mileageRate + ageRate + drivePay + brandPay;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);

    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());

    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

    return newPathname;
};

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    // Set the required headers for the API request
    const headers: HeadersInit = {
        "X-RapidAPI-Key": "842bc111f4mshbb3800ae5e66b65p1c7e57jsn118d0d19a7bb" || "",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', "hrjavascript-mastery" || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 