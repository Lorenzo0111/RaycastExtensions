import { Clipboard, Toast, closeMainWindow, showToast, type LaunchProps } from "@raycast/api";

export default function toUpperCase(props: LaunchProps<{ arguments: Arguments.ToUppercase }>) {
  Clipboard.copy(props.arguments.input.toUpperCase());

  closeMainWindow({ clearRootSearch: true });
  showToast({
    style: Toast.Style.Success,
    title: "Copied to Clipboard",
  });
}
