import {
  Leaf,
  Box,
  Wrench,
  Armchair,
  PackageOpen,
  Trash2,
  Truck,
  Refrigerator,
  Home,
} from "lucide-react";

export const SERVICES = [
  {
    id: "yard-waste",
    title: "Yard Waste",
    description: "Branches, leaves, grass clippings, and storm debris hauled off — no bagging needed.",
    icon: Leaf,
  },
  {
    id: "cardboard-removal",
    title: "Cardboard Removal",
    description: "Stacks of moving boxes, Amazon piles, or post-event clutter. We break it down and take it.",
    icon: Box,
  },
  {
    id: "scrap-metal",
    title: "Scrap Metal",
    description: "Old grills, fencing, lawn equipment, and odd metal pieces from the garage or yard.",
    icon: Wrench,
  },
  {
    id: "small-furniture",
    title: "Small Furniture",
    description: "Chairs, end tables, dressers, mattresses, and other single-room pieces.",
    icon: Armchair,
  },
  {
    id: "garage-clutter",
    title: "Garage Clutter",
    description: "Reclaim your garage. Boxes, bins, broken tools, and forgotten projects all gone.",
    icon: PackageOpen,
  },
  {
    id: "basement-cleanouts",
    title: "Basement Cleanouts",
    description: "Small basement loads — boxes, shelves, and odds-and-ends from years of storage.",
    icon: Trash2,
  },
  {
    id: "curbside-pickup",
    title: "Curbside Pickup",
    description: "Got items on the curb? Leave them out, we load them up. Fast and contact-free if you prefer.",
    icon: Truck,
  },
  {
    id: "appliance-pickup",
    title: "Appliance Pickup",
    description: "Single appliance hauls — fridges, washers, dryers, microwaves. One at a time, done right.",
    icon: Refrigerator,
  },
  {
    id: "moving-leftovers",
    title: "Moving Leftovers",
    description: "After the truck pulls away, we clean up what's left behind. Tenant turnovers welcome.",
    icon: Home,
  },
];
