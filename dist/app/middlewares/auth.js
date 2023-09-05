"use strict";
// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// const auth = (req: Request, res: Response, next: NextFunction) => {
//   const createToken = (payload, secret, expiredTime) => {
//     return jwt.sign(payload, secret, { expiresIn: expiredTime });
//   };
//   const verifyToken = (token, secret) => {
//     return jwt.verify(token, secret);
//   };
//   const token = req.headers.authorization;
//   if (!token) {
//     throw new Error("Your are not authorize");
//   }
//   //   verify Token
//   let verifiedUser = null;
//   verifiedUser = verifyToken(token, process.env.JWT_SECRET);
//   req.user = verifiedUser;
// };
