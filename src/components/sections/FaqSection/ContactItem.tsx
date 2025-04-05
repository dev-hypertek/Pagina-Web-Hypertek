"use client";

import { memo } from "react";
import { ContactItem as ContactItemType } from "@/types";

const ContactItem = ({ icon, text }: ContactItemType) => (
  <li className="flex items-center justify-center text-white text-xs">
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </li>
);

export default memo(ContactItem);
