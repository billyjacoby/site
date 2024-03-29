---
title: "How to clone a VM in Proxmox"
slug: "/blog/clone-vm-proxmox"
date: "2020-05-27"
featuredImage: "./clone-vm-proxmox.jpeg"
---
I generally store one VM for my most popular operating systems as a spun down clone on my Proxmox host. This makes it super simple for me to spin up a fresh VM in case I want to try something new, or if i need to isolate and troubleshoot a problem I've been having on a different guest.

For this quick tutorial I'll be cloning a version of Ubuntu that I already has stored as a clone on my host machine.

There are a few different things that I always like to do immediately after cloning a VM.

*   Change the options for the VM
*   Change the hostname
*   Change the IP address
*   Expand the disk

Change VM Options
-----------------

The first thing we have to do is actually clone the VM and decide on a few options.

From the stored VM clone click the 'More' option at the top right of the summary screen, then select 'Clone'.

Follow the prompt to select options and continue. I usually clone each VM as a full clone, rather than linking them. To be honest, I'm not too sure what a 'Linked Clone' is, or how it would be useful.

After this is done choose what hardware options you'd like your machine to have. In the sidebar on the right select the 'Hardware' option. Select how much RAM you'd like to allocate, and increase the disk size if you'd like. Note that you can only increase the disk size and not decrease it, plus this will take a bit more work to accomplish.

Now that we've got all of our options configured go ahead and start the machine, then head to the 'Console' tab to begin updating our info.

Change Hostname:
----------------

The first thing that we'll change is the hostname for the machine.

After you login to your shell you, you can display the current hostname, by entering this command:

    hostnamectl

The info about the machine will be displayed:![](https://billyjacoby.com/content/images/2020/05/hostnamectl.png)

As of Ubuntu 18.04 we can change the hostname using the same command with some flags.

    sudo hostnamectl set-hostname newHostName

Running the `hostnamectl` command again after this will show us our new host name.![](https://billyjacoby.com/content/images/2020/05/new-hostnamectl.png)

After this we still need to edit the hosts file. This is located at `/etc/hosts`.

    sudo vim /etc/hosts

Remove the old hostname, and replace it with your new desired one.![](https://billyjacoby.com/content/images/2020/05/hosts-file.png)

Next we need to edit the cloud.cfg file if it exists. This is a file that belong to the cloud-init package which makes managing cloud instances of images simpler.

    sudo vim /etc/cloud-init/cloud.cfg

Here we will find the line that says `preserver_hostname` and change it from `false` to `true`.

Change IP Address:
------------------

Please make sure that you are connected to your VM via the console in the Proxmox Web GUI, otherwise you will lose the connection to the VM.

I always statically assign my VMs their IP address in order to avoid any conflict. I also have a range of IPs on my LAN that I use to make this easier as well.

This makes it easier to know how to access the VM when I am first configuring it. If you don't have a specific range of IPs dedicated to your VMs I would certainly recommend making this IP static on the router itself after initial setup though.

For now we will change the IP using netplan.

Your mileage my vary, but I can always find my netplan configs here:

    sudo vim /etc/netplan/50-cloud-init.yaml

All we've got to do is edit this file to reflect the changes that we'd like to see.![](https://billyjacoby.com/content/images/2020/05/netplan.png)

Then edit the address from whatever it is (192.168.1.20 in my case) to what you'd like it to be.

Then generate and apply the config

    sudo netplan generate
    sudo netplan apply

Now running `ifconfig` will show you the new IP address you've assigned!

Expand the Disk
---------------

Now the last step is to expand the hard disk to use all available space. This is a more lengthy process, and as such I will cover it in another blog post. This can be found [here.](https://billyjacoby.com/how-to-expand-the-disk-on-a-ubuntu-vm/)

Feel free to enter your email address below to get notified when new posts come out. Thanks for reading!