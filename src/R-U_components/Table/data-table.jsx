import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Slash } from "lucide-react";
import { useSelector } from 'react-redux';
import { DropdownMenu } from "../Dropdown/DropdownMenu";
import { Lock, Trash, Edit, Eye } from "lucide-react"; // Example icons


export function DataTable({ columns, data, onRowClick, actionColumn, showPagination = true, currentPage, itemsPerPage = 10, onPageChange, showFooter = true }) {
  const user = useSelector((state) => state.user.user);
  const adminUserType = user?.adminUserType; // Extract user role
  console.log("Admin User Type:", adminUserType);

  const location = useLocation();
  const currentRoute = location.pathname;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = showFooter ? data.slice(startIndex, startIndex + itemsPerPage) : data;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const endIndex = startIndex + itemsPerPage;

  // Move ADMIN_LEVELS outside of renderPagination
  const ADMIN_LEVELS = {
    SUPER_ADMIN: "SUPER_ADMIN",
    GENERAL_MANAGER: "GENERAL_MANAGER",
    CUSTOMER_CARE_REP: "CUSTOMER_CARE_REP",
    OPERATIONS_MANAGER: "OPERATIONS_MANAGER",
    FINANCE_MANAGER: "FINANCE_MANAGER",
  };
  

  const getRowActions = (adminUserType, rowData) => {
    const actions = [
      {
        label: "View Details",
        action: () => console.log("Viewing details for", rowData),
        icon: Eye,
        allowedLevels: Object.values(ADMIN_LEVELS), // Allow all levels
      },
      {
        label: "Update",
        action: () => console.log("Updating user", rowData),
        icon: Edit,
        allowedLevels: [
          ADMIN_LEVELS.OPERATIONS_MANAGER,
          ADMIN_LEVELS.CUSTOMER_CARE_REP,
          ADMIN_LEVELS.GENERAL_MANAGER,
          ADMIN_LEVELS.SUPER_ADMIN,
        ],
      },
      {
        label: "Deactivate",
        action: () => console.log("Deactivating user", rowData),
        icon: Lock,
        allowedLevels: [
          ADMIN_LEVELS.FINANCE_MANAGER,
          ADMIN_LEVELS.OPERATIONS_MANAGER,
          ADMIN_LEVELS.CUSTOMER_CARE_REP,
          ADMIN_LEVELS.SUPER_ADMIN,
        ],
      },
      {
        label: "Delete",
        action: () => console.log("Deleting user", rowData),
        icon: Trash,

        allowedLevels: [ADMIN_LEVELS.SUPER_ADMIN],
      },
    ];
  
    return actions.filter((action) =>
      action.allowedLevels.includes(adminUserType)
    );
  };
  

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-4 py-2 text-sm ${
              currentPage === i
                ? "text-[#E85C13] font-medium"
                : "text-[#667085]"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <span key={i} className="px-4 py-2 text-[#667085]">
            ...
          </span>
        );
      }
    }

    return (
      <div className="flex items-center justify-between mt-4">
        <button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        <div className="flex items-center">{pages}</div>
        <button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto"> {/* Shift table right */}
      <div className="border border-[#e4e7ec] rounded-lg">
        <table className="w-[95%] ">
          <thead>
            <tr className="bg-white border-b border-[#e4e7ec]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="p-4 text-sm font-medium text-[#344054] text-left"
                >
                  {column.title}
                </th>
              ))}
              {actionColumn && (
                <th className="p-4 text-sm font-medium text-[#344054] text-left">
                  {actionColumn.title}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-[#e4e7ec] last:border-b-0 hover:bg-gray-50 cursor-pointer"
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="p-4 text-sm text-[#344054]"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
                {actionColumn && (
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    <DropdownMenu actions={getRowActions(adminUserType, row)} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
          {showFooter && (
            <tfoot>
              <tr>
                <td
                  colSpan={columns.length + (actionColumn ? 1 : 0)}
                  className="pb-3 border-t border-[#e4e7ec]"
                >
                  {showPagination && renderPagination()}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
