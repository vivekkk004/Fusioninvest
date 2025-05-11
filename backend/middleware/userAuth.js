import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: 'Not authorized. Login again' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);  // Fixed typo

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      next();
    } else {
      return res.json({ success: false, message: "Not authorized. Login again" });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;
