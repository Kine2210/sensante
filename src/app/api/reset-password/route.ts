import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

// Exemple : tu peux remplacer par ton ORM (Prisma, etc.)
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur introuvable" },
        { status: 404 }
      );
    }

    // Générer un token unique
    const token = crypto.randomUUID();

    // Sauvegarder le token en base
    await prisma.resetToken.create({
      data: {
        token,
        userId: user.id,
        expires: new Date(Date.now() + 3600000), // expire dans 1h
      },
    });

    // Configurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ton email
        pass: process.env.EMAIL_PASS, // ton mot de passe ou App Password
      },
    });

    // Envoyer l'email
    const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Réinitialisation de votre mot de passe",
      text: `Cliquez sur ce lien pour réinitialiser votre mot de passe : ${resetLink}`,
    });

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la réinitialisation" },
      { status: 500 }
    );
  }
}
