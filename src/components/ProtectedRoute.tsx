import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "@/src/lib/auth-client";

export default function ProtectedRoute() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
