interface StatusBadgeProps {
  status: "Forged" | "Forging" | "Prospecting Ore"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-blue-600 text-white py-2 px-4 rounded-md">Forging status : {status}</div>
    </div>
  )
}

