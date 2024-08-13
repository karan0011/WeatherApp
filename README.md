# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# Weather App

This is a Weather App built with Angular 18, following the standalone component approach. The application fetches and displays weather information using various endpoints from a weather API. The project is structured with modular, reusable components, and it uses basic HTML and CSS for styling.

## Features

- **Home Page**: A welcome page with a brief introduction to the app.
- **About Page**: A page describing the purpose of the app.
- **Current Weather**: Fetches and displays the current weather for a specified city.
- **Weather Forecast**: Displays a 5-day weather forecast for a specified city.
- **Air Quality**: Displays air quality information based on latitude and longitude.
- **Weather Alerts**: Shows weather alerts for a specified location.
- **UV Index**: Displays the UV index for a specific location.
- **News**: A placeholder component for weather-related news.
- **Grocery**: A placeholder component for grocery-related weather tips.
- **Feedback Form**: A form where users can submit feedback. The form includes validation with error messages.

## Colors Used

- **Primary Background Color**: `#E1F4F3`
- **Primary Text Color**: `#333333`
- **Accent Color**: `#706C61`
- **Form Validation Error Color**: `red`

## Setup Instructions

### Prerequisites

- Node.js and npm should be installed on your machine.
- Angular CLI installed globally (`npm install -g @angular/cli`).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Serve the application**:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200/`.


### Component Descriptions

- **HomeComponent**: Displays a welcome message.
- **AboutComponent**: Provides information about the app.
- **CurrentWeatherComponent**: Fetches and displays the current weather for a user-input city.
- **ForecastComponent**: Displays a 5-day weather forecast for a user-input city.
- **AirQualityComponent**: Displays air quality information based on latitude and longitude.
- **WeatherAlertsComponent**: Shows weather alerts for a specified location.
- **UVIndexComponent**: Displays the UV index based on location.
- **NewsComponent**: Placeholder for news-related content.
- **GroceryComponent**: Placeholder for grocery-related tips.
- **FormComponent**: A user feedback form with validation.

### How to Use

- Navigate through the app using the links provided in the navigation bar.
- Enter a city name to fetch current weather or forecast data.
- Enter latitude and longitude to fetch air quality, weather alerts, or UV index data.
- Submit feedback using the feedback form, ensuring all fields are filled correctly.

### API Integration

This project uses a weather API to fetch real-time weather data. Make sure to replace `YOUR_API_KEY` in `weather.service.ts` with your actual API key.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request.

