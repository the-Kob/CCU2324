// Function to convert a Google Drive link to a direct download link
function convertDriveLinkToDownloadLink(driveLink) {
    // Extract file ID from the Google Drive link
    const fileIdMatch = driveLink.match(/\/d\/([^/]+)|\/file\/d\/([^/]+)\//);
    if (fileIdMatch && fileIdMatch.length > 1) {
        // Use the first non-empty match as the file ID
        const fileId = fileIdMatch[1] || fileIdMatch[2];

        // Construct the direct download link
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
        return downloadLink;
    } else {
        console.error('Invalid Google Drive link format');
        return null;
    }
}

// Function to set the download link for a specified element
function setDownloadLink(elementId, driveLink) {
    const downloadLink = convertDriveLinkToDownloadLink(driveLink);
    if (downloadLink) {
        const downloadButton = document.getElementById(elementId);
        if (downloadButton) {
            downloadButton.href = downloadLink;
        } else {
            console.error(`Element with ID '${elementId}' not found`);
        }
    } else {
        console.error('Failed to convert the Google Drive link');
    }
}

function openPage(pageName) {
    window.location.href = pageName;
}