const baseApiURL = "https://norma.education-services.ru";

export const ingredientsAddress = new URL("/api/ingredients", baseApiURL).href;
export const orderAddress = new URL("/api/orders", baseApiURL).href;

export const recoveryAddress = new URL("/api/password-reset", baseApiURL).href;
export const resetPasswordAddress = new URL("/api/password-reset/reset", baseApiURL).href;

// POST - эндпоинт для авторизации.
export const authLoginAddress = new URL("/api/auth/login", baseApiURL).href;

// POST - эндпоинт для выхода из системы.
export const authLogoutAddress = new URL("/api/auth/logout", baseApiURL).href;

// POST - эндпоинт для регистрации пользователя.
export const authRegisterAddress = new URL("/api/auth/register", baseApiURL).href;

// POST - эндпоинт обновления токена.
export const authTokenAddress = new URL("/api/auth/token", baseApiURL).href;

// POST - эндпоинт обновления токена.
export const authUserAddress = new URL("/api/auth/user", baseApiURL).href;
