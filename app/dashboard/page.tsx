import { DashboardWidget } from '@/src/widgets/dashboard';

export default async function DashboardPage({
  user,
  notificationEnabled,
  toggleNotification,
}) {
  return (
    <DashboardWidget
      user={user}
      notificationEnabled={notificationEnabled}
      toggleNotification={toggleNotification}
    />
  );
}
