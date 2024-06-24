import React from "react";

export default function Layout({
  children,
  notes,
  setting,
}: {
  children: React.ReactNode;
  notes: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <div>
      <h2>LayoutProfile</h2>
      <h2>LayoutProfile</h2>
      <h2>LayoutProfile</h2>
      <h2>LayoutProfile</h2>
      <h2>LayoutProfile</h2>
      {children}
      {notes}
      {setting}
    </div>
  );
}
