import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=800&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&auto=format&fit=crop";

  const COLD_URL =
    "https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?w=800&auto=format&fit=crop";

  const CLOUD_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop";

  const FOG_URL =
    "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=800&auto=format&fit=crop";

  const CLEAR_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop";

  const weatherCondition = info.weather?.toLowerCase() || "";

  const weatherImage =
    weatherCondition.includes("rain")
      ? RAIN_URL
      : weatherCondition.includes("cloud")
      ? CLOUD_URL
      : weatherCondition.includes("mist") ||
        weatherCondition.includes("fog") ||
        weatherCondition.includes("haze")
      ? FOG_URL
      : weatherCondition.includes("clear")
      ? CLEAR_URL
      : info.temp < 10
      ? COLD_URL
      : HOT_URL;

  return (
    <div className="InfoBox">
      <h1 className="weather-heading">🌦 Weather Information</h1>

      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 420,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            color: "white",
          }}
        >
          <CardMedia
            sx={{ height: 220 }}
            image={weatherImage}
            title="Weather Image"
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              📍 {info.city}{" "}
              {weatherCondition.includes("rain") ? (
                <ThunderstormIcon />
              ) : weatherCondition.includes("clear") ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>

            <Typography
              variant="body2"
              component="div"
              sx={{ color: "white" }}
            >
              <p>🌡 Temperature : {info.temp}°C</p>

              <p>💧 Humidity : {info.humidity}%</p>

              <p>⬇ Min Temp : {info.tempMin}°C</p>

              <p>⬆ Max Temp : {info.tempMax}°C</p>

              <p>🤗 Feels Like : {info.feelsLike}°C</p>

              <p>
                🌤 Weather : <b>{info.weather}</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}