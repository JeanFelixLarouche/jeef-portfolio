import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export default function BioCard() {
  return (
    <Card sx={{ width: 420, maxWidth: "100%", boxShadow: "lg", backgroundColor: "#ffecff" }}>
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src="./Raison.jpg" sx={{ "--Avatar-size": "5rem" }} />
        <Typography level="title-lg">JEEF</Typography>
        <Typography level="body-sm" sx={{ maxWidth: "38ch" }}>
          Hey, that's me! I'm a computer engineering student at the University
          of Sherbrooke that likes to make cool stuff when he has the time.
          Thank you for visiting my page!
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": { borderRadius: "2rem" },
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/JeanFelixLarouche"
            target="_blank"
            size="sm"
            variant="plain"
            color="neutral"
          >
            <img src="./github.svg" alt="GitHub" width="26" height="26" />
          </IconButton>
          <IconButton
            component="a"
            href="https://leetcode.com/u/Jeef22"
            target="_blank"
            size="sm"
            variant="plain"
            color="neutral"
          >
            <img src="./leetcode.svg" alt="LeetCode" width="26" height="26" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
