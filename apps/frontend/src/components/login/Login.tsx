import React from "react";
import {
    Box,
    Button,
    Divider,
    TextField,
    Typography,
    Stack,
    Paper,
    IconButton,
} from "@mui/material";
import { Google, Facebook, GitHub } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import { useTheme } from "@mui/material";

const Login: React.FC = () => {
    const theme = useTheme();
    const handleSocialLogin = (provider: string) => {
        console.log(`Sign in with ${provider}`);
        // You can integrate actual social login here (e.g., Firebase or OAuth endpoint)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor={theme.palette.background.default}
        >
            <Paper
                elevation={24}
                sx={{
                    p: 4,
                    width: "100%",
                    maxWidth: 400,
                    borderRadius: 3,
                    bgcolor: theme.palette.background.paper,
                }}
            >
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        src={logo}
                        height="100px"
                        width="100px"
                        style={{ borderRadius: "8px", marginBottom: "1.5rem" }}
                    />
                </Box>
                <Typography
                    variant="h5"
                    textAlign="center"
                    fontWeight="bold"
                    mb={2}
                >
                    Sign In
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                            }}
                        >
                            Sign In
                        </Button>
                    </Stack>
                </Box>

                <Divider sx={{ my: 3 }}>or continue with</Divider>

                <Stack direction="row" spacing={2} justifyContent="center">
                    <IconButton
                        onClick={() => handleSocialLogin("Google")}
                        sx={{
                            bgcolor: "#fff",
                            border: "1px solid #ddd",
                            ":hover": { bgcolor: "#f5f5f5" },
                        }}
                    >
                        <Google sx={{ color: "#DB4437" }} />
                    </IconButton>

                    <IconButton
                        onClick={() => handleSocialLogin("Facebook")}
                        sx={{
                            bgcolor: "#fff",
                            border: "1px solid #ddd",
                            ":hover": { bgcolor: "#f5f5f5" },
                        }}
                    >
                        <Facebook sx={{ color: "#1877F2" }} />
                    </IconButton>

                    <IconButton
                        onClick={() => handleSocialLogin("GitHub")}
                        sx={{
                            bgcolor: "#fff",
                            border: "1px solid #ddd",
                            ":hover": { bgcolor: "#f5f5f5" },
                        }}
                    >
                        <GitHub sx={{ color: "#000" }} />
                    </IconButton>
                </Stack>

                <Typography
                    variant="body2"
                    textAlign="center"
                    mt={3}
                    color="text.secondary"
                >
                    Don’t have an account?{" "}
                    <Typography
                        component="span"
                        sx={{ cursor: "pointer", fontWeight: 500 }}
                    >
                        Sign up
                    </Typography>
                </Typography>
            </Paper>
        </Box>
    );
};

export default Login;
