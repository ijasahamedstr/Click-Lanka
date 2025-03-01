import React, { useState } from "react";
import { Box, Typography, Grid, Button, Container, Stack } from "@mui/material";
import { Phone, Language, LocalShipping, AccessTime, Group } from "@mui/icons-material"; // Icons for the buttons

function Service() {
  const [selectedContent, setSelectedContent] = useState({
    heading: "Explore The Freight Service",
    content: (
      <>
        <Typography
          sx={{
            color: "#333",
            fontSize: "18px",
            marginBottom: "30px",
            fontFamily: '"Changa", sans-serif',
          }}
        >
          Discover reliable and efficient freight solutions tailored to your
          needs. Whether it’s Air Freight, Sea Freight, or Road Freight, we
          ensure safe, timely, and cost-effective delivery of your goods. From
          local shipments to global logistics, we’ve got you covered.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#333",
            fontFamily: '"Changa", sans-serif',
            marginBottom: "20px",
          }}
        >
          BENEFITS:
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> On-Time Delivery</strong> – Reliable and punctual
              service.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Cost-Effective</strong> – Affordable solutions for all
              shipment sizes.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Global Reach</strong> – Seamless international
              shipping.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Secure Shipping</strong> – Advanced tracking and
              safety measures.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Scalable Services</strong> – Flexible options to grow
              with your business.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Expert Support</strong> – Friendly and knowledgeable
              customer service.
            </Typography>
          </li>
        </ul>
      </>
    ),
    image: "https://i.ibb.co/BVqgWm58/abt-carousel1.webp", // Default image
  });

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (content, buttonId) => {
    setActiveButton(buttonId);

    if (content === "Explore The Freight Service") {
      setSelectedContent({
        heading: "Explore The Freight Service",
        content: (
            <>
            <Typography sx={{
            color: "#333",
            fontSize: "18px",
            marginBottom: "30px",
            fontFamily: '"Changa", sans-serif',
            }}>
            Discover reliable and efficient freight solutions tailored to your
            needs. Whether it’s Air Freight, Sea Freight, or Road Freight, we
            ensure safe, timely, and cost-effective delivery of your goods. From
            local shipments to global logistics, we’ve got you covered.
          </Typography>
          <Typography
          variant="h5"
          sx={{
            color: "#FF5733",
            fontFamily: '"Changa", sans-serif',
            marginBottom: "20px",
          }}
        >
          BENEFITS:
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> On-Time Delivery</strong> – Reliable and punctual
              service.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Cost-Effective</strong> – Affordable solutions for all
              shipment sizes.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Global Reach</strong> – Seamless international
              shipping.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Secure Shipping</strong> – Advanced tracking and
              safety measures.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Scalable Services</strong> – Flexible options to grow
              with your business.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Expert Support</strong> – Friendly and knowledgeable
              customer service.
            </Typography>
          </li>
        </ul>
        </>         
        ),
        image: "https://i.ibb.co/BVqgWm58/abt-carousel1.webp",
      });
    } else if (content === "Whatever You Want") {
      setSelectedContent({
        heading: "Whatever You Want",
        content: (
         <>
         <Typography sx={{
            color: "#333",
            fontSize: "18px",
            marginBottom: "30px",
            fontFamily: '"Changa", sans-serif',
            }}>
            No matter the destination, we ensure your shipments reach their goal efficiently and securely. From local deliveries to international transport, our freight services are designed to connect you to the world.
          </Typography>
          <Typography
          variant="h5"
          sx={{
            color: "#FF5733",
            fontFamily: '"Changa", sans-serif',
            marginBottom: "20px",
          }}
        >
          BENEFITS:
        </Typography>
        <ul>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Global Accessibility</strong> – Reach any location seamlessly.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Versatile Options</strong> – Air, sea, and road freight to suit your needs.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Reliable Deliveries</strong> – Timely and secure shipment handling.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Cost-Effective Solutions</strong> – Affordable logistics for all scales.
            </Typography>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
              <strong> Expert Guidance </strong> – Support at every step of the journey.
            </Typography>
          </li>
        </ul>
         </>
        ),
        image: "https://i.ibb.co/Tq86717h/img-3.webp",
      });
    } else if (content === "Explore Our Vehicles") {
      setSelectedContent({
        heading: "Explore Our Vehicles",
        content: (
            <>
            <Typography sx={{
               color: "#333",
               fontSize: "18px",
               marginBottom: "30px",
               fontFamily: '"Changa", sans-serif',
               }}>
               Our diverse fleet is equipped to handle all your transportation needs. From small deliveries to heavy-duty cargo, we offer reliable and efficient vehicles to ensure your goods are delivered safely and on time.
             </Typography>
             <Typography
             variant="h5"
             sx={{
               color: "#FF5733",
               fontFamily: '"Changa", sans-serif',
               marginBottom: "20px",
             }}
           >
             BENEFITS:
           </Typography>
           <ul>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Versatility</strong> – Suitable for all cargo types and sizes.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Reliability</strong> – Well-maintained fleet for seamless operations.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Safety</strong> – Advanced features to secure your goods in transit.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Efficiency </strong> – Optimized for fuel and time savings.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Expert Drivers </strong> – Skilled professionals ensuring smooth delivery.
               </Typography>
             </li>
           </ul>
            </>
        ),
        image: "https://i.ibb.co/1YNsZk9L/img-1.webp",
      });
    } else if (content === "delivery on time") {
      setSelectedContent({
        heading: "Delivery on time",
        content: (
            <>
            <Typography sx={{
               color: "#333",
               fontSize: "18px",
               marginBottom: "30px",
               fontFamily: '"Changa", sans-serif',
               }}>
               Timely delivery is our promise. We prioritize efficiency and reliability to ensure your shipments reach their destination exactly when expected, keeping your operations running smoothly.
             </Typography>
             <Typography
             variant="h5"
             sx={{
               color: "#FF5733",
               fontFamily: '"Changa", sans-serif',
               marginBottom: "20px",
             }}
           >
             BENEFITS:
           </Typography>
           <ul>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Reliability</strong> – Consistent, punctual service every time.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Customer Satisfaction</strong> – Enhance trust with timely shipments.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Business Efficiency </strong> – Avoid delays and maintain smooth workflows.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Real-Time Tracking </strong> – Stay updated on your shipment’s progress.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Peace of Mind  </strong> – Dependable service you can count on.
               </Typography>
             </li>
           </ul>
            </>
        ),
        image: "https://i.ibb.co/p69Sf7qy/img-2-1.webp",
      });
    } else if (content === "fully dedicated team") {
      setSelectedContent({
        heading: "Fully dedicated team",
        content: (
            <>
            <Typography sx={{
               color: "#333",
               fontSize: "18px",
               marginBottom: "30px",
               fontFamily: '"Changa", sans-serif',
               }}>
               Our team of skilled professionals is fully committed to meeting your logistics and freight needs. With expertise and a customer-first approach, we ensure seamless and efficient service at every step.
             </Typography>
             <Typography
             variant="h5"
             sx={{
               color: "#FF5733",
               fontFamily: '"Changa", sans-serif',
               marginBottom: "20px",
             }}
           >
             BENEFITS:
           </Typography>
           <ul>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Expertise </strong> – Experienced professionals handling your shipments.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong>Personalized Service</strong> – Tailored solutions for your unique needs.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> 24/7 Support </strong> – Assistance whenever you need it.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Reliability  </strong> – A team you can trust to deliver results.
               </Typography>
             </li>
             <li style={{ marginBottom: "10px" }}>
               <Typography sx={{ color: "#333", fontSize: "16px",fontFamily: '"Changa", sans-serif' }}>
                 <strong> Problem-Solving   </strong> – Quick resolutions to any challenges.
               </Typography>
             </li>
           </ul>
            </>
        ),
        image: "https://i.ibb.co/3mmzRt5C/img-4-1.webp",
      });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", padding: "50px 0" }}>
      {/* Container to Center the Content */}
      <Container sx={{paddingBottom:'60px'}}>
        <Grid container spacing={4} justifyContent="center">
          {/* Left Section with Text */}
          <Grid item xs={12} sm={6} md={6} sx={{ paddingRight: "30px" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#FF5733",
                fontWeight: "bold",
                marginBottom: "20px",
                fontFamily: '"Changa", sans-serif',
              }}
            >
              {selectedContent.heading}
            </Typography>
            <hr
              style={{
                border: "1px solid #40404a",
                width: "60px",
                margin: "10px 0",
              }}
            />
            {selectedContent.content}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF5733",
                color: "#fff",
                textTransform: "uppercase",
                fontFamily: '"Changa", sans-serif',
                padding: "10px 30px",
                borderRadius: "5px",
              }}
            >
              Read More
            </Button>
          </Grid>

          {/* Right Section with Image */}
          <Grid item xs={12} sm={6} md={6} sx={{ paddingLeft: "30px" }}>
            <img
              src={selectedContent.image}
              alt="Service Image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>

        {/* Icon Buttons Section */}
        <Box sx={{ textAlign: "center", marginTop: "50px" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Button
                sx={{
                  backgroundColor: activeButton === "Explore The Freight Service" ? "#ff5d1b" : "white",
                  color: activeButton === "Explore The Freight Service" ? "#fff" : "#40404a",
                  border: "1px solid #abb2b9",
                  padding: "80px 30px 15px",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  minWidth: "150px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: activeButton === "Explore The Freight Service" ? "#ff5d1b" : "#f5f5f5",
                  },
                }}
                onClick={() => handleButtonClick("Explore The Freight Service", "Explore The Freight Service")}
              >
                <Stack direction="column" alignItems="center" justifyContent="center">
                  <Phone sx={{ fontSize: "50px", marginBottom: "8px" }} />
                  <Typography style={{fontFamily:'math'}}>24/7 SERVICE</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: activeButton === "Whatever You Want" ? "#ff5d1b" : "white",
                  color: activeButton === "Whatever You Want" ? "#fff" : "#40404a",
                  border: "1px solid #abb2b9",
                  padding: "80px 30px 15px",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  minWidth: "150px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: activeButton === "Whatever You Want" ? "#ff5d1b" : "#f5f5f5",
                  },
                }}
                onClick={() => handleButtonClick("Whatever You Want", "Whatever You Want")}
              >
                <Stack direction="column" alignItems="center" justifyContent="center">
                  <Language sx={{ fontSize: "50px", marginBottom: "8px" }} />
                  <Typography style={{fontFamily:'math'}}>WORLD WIDE</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: activeButton === "Explore Our Vehicles" ? "#ff5d1b" : "white",
                  color: activeButton === "Explore Our Vehicles" ? "#fff" : "#40404a",
                  border: "1px solid #abb2b9",
                  padding: "80px 30px 15px",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  minWidth: "150px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: activeButton === "Explore Our Vehicles" ? "#ff5d1b" : "#f5f5f5",
                  },
                }}
                onClick={() => handleButtonClick("Explore Our Vehicles", "Explore Our Vehicles")}
              >
                <Stack direction="column" alignItems="center" justifyContent="center">
                  <LocalShipping sx={{ fontSize: "50px", marginBottom: "8px" }} />
                  <Typography style={{fontFamily:'math'}}>DELIVERY</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: activeButton === "delivery on time" ? "#ff5d1b" : "white",
                  color: activeButton === "delivery on time" ? "#fff" : "#40404a",
                  border: "1px solid #abb2b9",
                  padding: "80px 30px 15px",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  minWidth: "150px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: activeButton === "delivery on time" ? "#ff5d1b" : "#f5f5f5",
                  },
                }}
                onClick={() => handleButtonClick("delivery on time", "delivery on time")}
              >
                <Stack direction="column" alignItems="center" justifyContent="center">
                  <AccessTime sx={{ fontSize: "50px", marginBottom: "8px" }} />
                  <Typography style={{fontFamily:'math'}}>TIME</Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: activeButton === "fully dedicated team" ? "#ff5d1b" : "white",
                  color: activeButton === "fully dedicated team" ? "#fff" : "#40404a",
                  border: "1px solid #abb2b9",
                  padding: "80px 30px 15px",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  minWidth: "150px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: activeButton === "fully dedicated team" ? "#ff5d1b" : "#f5f5f5",
                  },
                }}
                onClick={() => handleButtonClick("fully dedicated team", "fully dedicated team")}
              >
                <Stack direction="column" alignItems="center" justifyContent="center">
                  <Group sx={{ fontSize: "50px", marginBottom: "8px" }} />
                  <Typography style={{fontFamily:'math'}}>TEAM</Typography>
                </Stack>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Service;
