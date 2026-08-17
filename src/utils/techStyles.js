export const getTechStyle = (tech) => {
  const norm = tech.toLowerCase().trim();
  if (norm.includes("asp.net") || norm === ".net") {
    return "bg-purple-50 text-purple-800 border-purple-200 font-semibold";
  }
  if (norm.includes("sql server")) {
    return "bg-blue-50 text-blue-800 border-blue-200 font-semibold";
  }
  if (norm === "ef core" || norm.includes("entity framework")) {
    return "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200 font-semibold";
  }
  if (norm.includes("jwt")) {
    return "bg-amber-50 text-amber-900 border-amber-200 font-semibold";
  }
  if (norm.includes("bootstrap")) {
    return "bg-indigo-50 text-indigo-800 border-indigo-200 font-semibold";
  }
  if (norm.includes("signalr")) {
    return "bg-rose-50 text-rose-800 border-rose-200 font-semibold";
  }
  if (norm.includes("typescript") || norm === "ts") {
    return "bg-sky-50 text-sky-800 border-sky-200 font-semibold";
  }
  if (norm.includes("tailwindcss") || norm === "tailwind") {
    return "bg-teal-50 text-teal-800 border-teal-200 font-semibold";
  }
  if (norm.includes("javascript") || norm === "js") {
    return "bg-amber-50 text-amber-800 border-amber-200 font-semibold";
  }
  if (norm.includes("node")) {
    return "bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold";
  }
  if (norm.includes("theia")) {
    return "bg-orange-50 text-orange-800 border-orange-200 font-semibold";
  }
  if (norm.includes("electron")) {
    return "bg-cyan-50 text-cyan-800 border-cyan-200 font-semibold";
  }
  if (norm.includes("html") || norm.includes("css")) {
    return "bg-orange-50 text-orange-800 border-orange-200 font-semibold";
  }
  if (norm.includes("c++") || norm.includes("c/c++")) {
    return "bg-blue-50 text-blue-800 border-blue-200 font-semibold";
  }
  if (norm.includes("python")) {
    return "bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold";
  }
  if (norm.includes("java")) {
    return "bg-red-50 text-red-800 border-red-200 font-semibold";
  }
  return "bg-neutral-50 text-neutral-800 border-neutral-200 font-semibold";
};
