"use client"
import React, { useState } from "react";
import AdminHeader from "~/components/admin-components/admin-header";
import Loader from "~/components/common/loader/Loader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  setTimeout(() => setLoading(false), 1000);

  return (
    <html lang="en">
      <body suppressContentEditableWarning={true}>
        <div className={`dark:bg-boxdark-2 ${loading ? 'hidden' : ''}`}>
          {loading ? <Loader /> :
            (
              <div className="flex h-screen overflow-hidden">
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                  <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            )
          }
        </div>
      </body>
    </html>
  );
};

export default AdminLayout;