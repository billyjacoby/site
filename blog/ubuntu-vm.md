---
title: "How to expand the disk on a Ubuntu VM"
slug: "/blog/how-to-expand-the-disk-on-a-ubuntu-vm"
date: "2020-05-20"
featuredImage: "./ubuntu-vm.jpeg"
---
I assure you, this blog post is more for me than it is for you. I can't begin to explain how many different times I have had to expand the disk space of a VM on my Proxmox host, and struggled far too long on Google to get the answer.

Sure, there's some different packages that you could install from the normal Ubuntu repositories to make this a super simple and almost thoughtless process, but what if your disk is completely full and that isn't an option?

The following is a quick and painless step by step guide to expand the disk on your Ubuntu virtual machine. This should be especially useful if you, for example, ran out of disk space and can't install any more packages.

We'll assume that you have already added the disk space to your VM on your host machine and that you've already rebooted your VM.

Parted
------

Parted is a command line utility that comes pre installed on Ubuntu 18.04. Parted can view and edit the partitions on your disk. We'll be using it to reorganize our disk space so that Ubuntu can see the newly added space on our disk.

For our purposes, parted must be run with the `sudo` command

This command will open the program:

    sudo parted

Executing the print command will show all partitions of the disk:

    print all

As soon as you type this command you will be greeted with a message that shows that we have unused disk space, perfect!

![](https://billyjacoby.com/content/images/2020/05/parted-fix.png)

Enter `F` or `Fix` to allow parted to fix the partition on the disk:

    Fix

This is all we will need to do in parted. Enter `q` to exit the utility.

    q

Fdisk
-----

Next we will be using `fdisk` to actually expand the new space to fill the rest of the drive.

Replace the "sda" in the following command with wherever your disk is mounted:

    sudo fdisk /dev/sda

The `p` command prints the current partition table:

    p

Now type `d` to delete your existing partition - as scary as it sounds this is just so that it can be replaced with a larger partition that's the size of the whole disk. It will also ask which partition to delete. Make sure that the one you are selecting is correct.

    d

The `n` command will create a new partition that, in our case, will include all the existing space on the disk. It will ask you a series of questions including what number the disk should be labeled, and the first and last sectors on the disk. I have always just selected the defaults here.

    n

Next you may be asked if you want to remove the signature on the drive. In my case, this means that there was already an ext4 formatted filesystem on this partition of the disk. I always choose to remove the previous signature here, but for some reason you may not want to.

![](https://billyjacoby.com/content/images/2020/05/fdisk-n.png)

The final step is to write the partition to our disk. After you ensure that you've selected all the correct options type the `w` command to write the new partition!

    w

Resize2fs
---------

And the final step in this process is to use the `resize2fs` utility to resize the filesystem so that it utilizes all of the space available on it.

    sudo resize2fs /dev/sda2

![resize2fs](https://billyjacoby.com/content/images/2020/05/resize2fs.png)

After you've done this you can log out and back in to your machine to see that the percentage of used disk space has decreased!

Thanks for reading!